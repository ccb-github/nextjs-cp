# Next.js App Directory Playground

Next.js introduced the `app/` directory (beta). This is the result of the [Layouts RFC](https://nextjs.org/blog/layouts-rfc) previously published for community feedback. This includes support for:

- **Layouts:** Easily share UI while preserving state and avoiding re-renders.
- **Server Components:** Making server-first the default for the most dynamic applications.
- **Streaming:** Display instant loading states and stream in updates.
- **Suspense for Data Fetching:** `async`/`await` support and the `use` hook for component-level fetching.

The `app/` directory can coexist with the existing `pages` directory for incremental adoption. While you **don't need to use the `app/` directory** when upgrading to Next.js 13, we're laying the foundations to build complex interfaces while shipping less JavaScript.

## Running Locally

1. Install dependencies:

```sh
pnpm install
```

2. Start the dev server:

```sh
pnpm dev
```

## Documentation

https://beta.nextjs.org/docs

## Leave Feedback

https://github.com/vercel/next.js/discussions/41745


 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        crossOrigin="anonymous" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        async>
      </script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous"></link>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        crossOrigin="anonymous"
      />

Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (node_modules, /home/mint/Documents/share/app-playground-main).


#Dynamic route rule
Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples:

    pages/api/post/create.js - Will match /api/post/create
    pages/api/post/[pid].js - Will match /api/post/1, /api/post/abc, etc. But not /api/post/create
    pages/api/post/[...slug].js - Will match /api/post/1/2, /api/post/a/b/c, etc. But not /api/post/create, /api/post/abc


Submit

p is a block element