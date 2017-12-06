import React from 'react';
import { Paragraph } from 'substance-ui/lib/components/Typography';

const propertiesHeader = (item, index) => {
  return (
    <tr>
      <td>Name</td>
      <td>Type</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
  )
}
const propertiesRow = (item, index) => {
  return (
    <tr key={index}>
      <td><Paragraph weight={300}>{item.name}</Paragraph></td>
      <td><Paragraph><code>{item.type}</code></Paragraph></td>
      <td><Paragraph><code style={{'background':'transparent'}}>{item.default}</code></Paragraph></td>
      <td>
        {item.options ? (
          <Paragraph><code style={{'background':'transparent'}}>{item.options}</code></Paragraph>
        ) : null }
          <Paragraph size="small" weight={300}>{item.description}</Paragraph>
      </td>
    </tr>
  )
}

export {
  propertiesHeader,
  propertiesRow
}
