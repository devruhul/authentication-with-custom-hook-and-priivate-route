import useDocumentTitle from "../../hooks/useDocumentTitle"

// function Page(props) {
//   return <h2>{props.content}</h2>
// }

function Page(props) {
  const titlePrefix = 'Firebase 🤠| '
  useDocumentTitle(`${titlePrefix}${props.title}`)
  return <h2>{props.content}</h2>
}

export default Page;