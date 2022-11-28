import React from 'react'

const MySelect = ({ options, defaulValue, value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(event) => { onChange(event.target.value) }}
      >
        <option value='' disabled={true}>{defaulValue}</option>
        {options.map((option) =>
          <option key={option.value} value={option.value}>{option.name}</option>
        )}
      </select>
    </div>
  )
}

export default MySelect