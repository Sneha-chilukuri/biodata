import Pagination from 'react-bootstrap/Pagination';

function PagesFeature() {
  return (
    <Pagination className='page-numbers-container'>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default PagesFeature;