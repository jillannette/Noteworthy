import Layout from "../components/Layout"

const newNote = () => {
  return (
    <Layout>
      <h2>Create a New Note</h2>

      <form>
        <label>
          Note Title:
          <input
            type="text"
            name="title"
          />
        </label>

        <label>
          Note Content:
          <textarea
            name="content"
          />
        </label>

        <button type="submit">Submit Note</button>
      </form>
    </Layout>
  )
}

export default newNote