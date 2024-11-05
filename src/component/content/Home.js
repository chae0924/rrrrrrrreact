import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mtitle from '../../ui/Mtitle'

export default function Home({ bgcolor, textcolor, vh, children, childcolor }) {
  return (
    <div>
    <h2 style={{"background" : bgcolor, "color": textcolor, "height": vh }}>
    <Mtitle textcolor={childcolor}>{children}</Mtitle>
    </h2>
    </div>
  );
}
