```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      {/* Ensure that the about page exists in pages/about.js */}
    </div>
  );
}

export default MyComponent;
```