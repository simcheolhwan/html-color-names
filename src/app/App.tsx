import { Fragment } from "react"
import names from "../names.json"
import Line from "./Line"

const App = () => {
  return (
    <>
      {Object.entries(names).map(([category, list]) => {
        return (
          <Fragment key={category}>
            <Line>{category}</Line>
            {list.map((name) => (
              <Line color={name} key={name} />
            ))}
          </Fragment>
        )
      })}
    </>
  )
}

export default App
