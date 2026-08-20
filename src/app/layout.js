import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

export const metadata = {
  title: 'Logan Campbell',
  description: 'Personal portfolio website for Logan Campbell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>

  )
}