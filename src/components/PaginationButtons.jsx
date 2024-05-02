import React from 'react'
import ReactPaginate from 'react-paginate';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';


const PaginationButtons = (props) => {
  return (
    <div>
    <ReactPaginate
    
      nextLabel={
        <span className='w-10 h-10 flex items-center justify-center bg-red-300 rounded-md'>
            <BsChevronRight color='white' />
        </span>
      }
    //   breakLabel={'...'}
      pageCount={props.prop2}
    //   marginPagesDisplayed={2}
    //   pageRangeDisplayed={3}
      previousLabel={
        <span className='w-10 h-10 flex items-center justify-center bg-red-300 rounded-md mr-4'>
        <BsChevronLeft color='white' />
    </span>
      }
      onPageChange={props.prop1}
      containerClassName="flex items-center justify-center mt-8 mb-4"
      pageClassName="block border-red-300 border-solid hover:bg-green-200 w-10 h-10 flex items-center justify-center rounded-md mr-4"
      activeClassName='bg-purple-200 text-white'
      
      />
    </div>
  )
}

export default PaginationButtons