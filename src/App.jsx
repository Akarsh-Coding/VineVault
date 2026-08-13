import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <div className="page-intro">
        <span className="text-caption page-intro__eyebrow">New enrollment</span>
        <h1 className="text-display-md page-intro__title">Wine club membership signup</h1>
        <p className="text-body page-intro__subtitle">
          Add a new member&rsquo;s details below. This form works even if the connection drops mid-entry.
        </p>
      </div>

      <div className="form-placeholder" role="status">
        <span className="text-body-sm">Form fields land in the next step.</span>
        <span className="text-caption"></span>
      </div>
    </Layout>
  )
}

export default App
