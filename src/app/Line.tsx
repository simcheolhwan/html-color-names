import { PropsWithChildren } from "react"
import loremIpsum from "../lorem-ipsum"
import styles from "./Line.module.scss"

interface Props {
  color?: string
}

const Line = ({ color, children = loremIpsum }: PropsWithChildren<Props>) => {
  return (
    <pre className={styles.line} style={{ color }}>
      {color?.padEnd(24)}
      {children}
    </pre>
  )
}

export default Line
