import React from 'react';
import MyInput from '../components/UI/input/MyInput.jsx';
import MySelect from '../components/UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {

  return (
    <>
      <MyInput
        value={filter.searchQuery}
        onChange={(event) => setFilter({ ...filter, searchQuery: event.target.value })}
        type="text"
        placeholder="search" />
      <MySelect
        value={filter.selectedSort}
        onChange={(event) => setFilter({ ...filter, selectedSort: event.target.value })}
        defaulValue='cортировка'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' },
        ]} />
    </>
  )
}

export default PostFilter