import ReactPaginate from 'react-paginate';
import paginatorStyle from './ReactPaginate.module.css'

function Paginator(props) {

    return (
        <div>
            <div className={paginatorStyle.paginator}>
                <div className={paginatorStyle.paginatorDescription}>
                    {(props.firstListItem) + 4} - {(props.lastListItem) + 4} of {props.totalReposCount} items
                </div>
                <ReactPaginate
                    pageCount={Math.ceil(props.totalReposCount / props.perPage)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={props.onPageChanged}
                    initialPage={0}
                    containerClassName={paginatorStyle.paginatorContainer}
                    pageClassName={paginatorStyle.paginatorItem}
                    breakClassName={paginatorStyle.paginatorBreak}
                    previousClassName={paginatorStyle.paginatorPrevious}
                    nextClassName={paginatorStyle.paginatorNext}
                    activeClassName={paginatorStyle.paginatorItemActive}
                    forcePage={null}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={paginatorStyle.break}
                />
            </div>
        </div>
    );
}


export default Paginator