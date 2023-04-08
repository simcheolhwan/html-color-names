import { PropsWithChildren } from "react"
import text from "../text"
import styles from "./Line.module.scss"

interface Props {
  color?: string
}

const Line = ({ color, children = text }: PropsWithChildren<Props>) => {
  return (
    <pre className={styles.line} style={{ color }}>
      {color?.padEnd(24)}
      {children}
    </pre>
  )
}

export default Line
