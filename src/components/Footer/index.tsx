import "./index.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Gabriel. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
