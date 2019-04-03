import { Column } from '../column';

export enum ESortDir {
	Asc = 'asc',
	Desc = 'desc',
}

export interface IDisplayHandlerResult<TRow extends {}> {
	/** The actual rows to display */
	rows: TRow[];
	/** The total number of rows in the table. It counts also items on other pages. The pages in the pagination component are calculated using this value. */
	totalRowCount: number;
}

export interface IDisplayHandlerParam<TRow extends {}, TSource, TFiltered, TSorted, TPaged> {
	/** The original {@link Datatable#data} property of the datatable. */
	source: TRow[] | TSource;
	/** The return value of {@link Handler#filterHandler}. */
	filtered: TRow[] | TFiltered;
	/** The return value of {@link Handler#sortHandler}. */
	sorted: TRow[] | TSorted;
	/** The return value of {@link Handler#paginateHandler}. */
	paged: TRow[] | TPaged;
}

export type TMaybePromise<T> = T | Promise<T>;

export type TFilterHandler<TRow extends {}, TIn = TRow[], TOut = TRow[]> =
	( data: TIn, filters: string | string[], columns: Array<Column<TRow>> ) => TMaybePromise<TOut>;
export type TSortHandler<TRow, TIn = TRow[], TOut = TRow[]> =
	( filteredData: TIn, sortColumn: Column<TRow> | null, sortDir: ESortDir | null ) => TMaybePromise<TOut>;
export type TPaginateHandler<TRow, TIn = TRow[], TOut = TRow[]> =
	( sortedData: TIn, perPage: number | null, pageNumber: number ) => TMaybePromise<TOut>;
export type TDisplayHandler<TRow, TSource = TRow[], TFiltered = TRow[], TSorted = TRow[], TPaged = TRow[]> =
	( operationResults: IDisplayHandlerParam<TRow, TSource, TFiltered, TSorted, TPaged> ) => TMaybePromise<IDisplayHandlerResult<TRow>>;

/**
 * This class exposes the main method used to manipulate table data, like filtering, sorting, or paginating. You can override instance's members to customize the behavior of your datatable.
 * Handlers are called in this order: filter, sort, paginate, display.
 *
 * In case you are overriding *one* of those handlers, make sure that its return value is compatible with subsequent handlers. Otherwise, you'll require to override all of them.
 *
 * @tutorial ajax-handler
 */
export abstract class AHandler<TRow extends {}, TSource = TRow[], TFiltered = TRow[], TSorted = TRow[], TPaged = TRow[]> {
	/** Filter the provided rows, checking if at least a cell contains one of the specified filters. It supports promises. Defaults to {@link Handler#defaultFilterHandler}. */
	public abstract filterHandler: TFilterHandler<TRow, TSource, TFiltered>;
	/** Sort the given rows depending on a specific column & sort order. It suports promises. Defaults to {@link Handler#defaultSortHandler}.  */
	public abstract sortHandler: TSortHandler<TRow, TFiltered, TSorted>;
	/** Split the rows list to display the requested page index. It supports promises. Defaults to {@link Handler#defaultPaginateHandler}. */
	public abstract paginateHandler: TPaginateHandler<TRow, TSorted, TPaged>;
	/** Handler to post-process the paginated data, and determine which data to actually display. It supports promises. Defaults to {@link Handler#defaultDisplayHandler}. */
	public abstract displayHandler: TDisplayHandler<TRow, TSource, TFiltered, TSorted, TPaged>;
}
