import { useState } from 'react';

function Links(props) {
    const [links, setLinks] = useState(props.links.map( link => (
        <span key={link.text}>
          <a className="App-link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer">
                {link.text}
          </a>
          {' | '}
        </span>
      )
    ))

    return (
        <p>
            {links}
            <a className="App-link" href='#'>Help</a>
        </p>
    );
}

export default Links;