export default ({ children }) => (
  <main>
    <div className="container">{children}</div>
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
          'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
          monospace, serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #22bad9;
      }
      p,
      li {
        font-size: 14px;
        line-height: 24px;
      }
      .container {
        max-width: 650px;
        margin: 0 auto;
      }
      blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
      }
      hr {
        margin: 20px 0;
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
    `}</style>
  </main>
)
