# Gucio Radio

Jellyfin web client

Using:

-   `shadcn/ui` for headless UI components - to practise work with headless UI component libraries
-   `usehooks-ts` for properly implemented custom hooks - to practise proper implementation of custom hooks
-   `tailwindcss` for utility styling classes
-   `react-fiber-three` Three.js wrapper for React
-   `react-fiber-drei` Utility functions - Used for importing textures using a hook

Performance optimization:

-   Memoized expensive functions - creating geometries and materials. Using `useMemo()`.
-   Import only necessary modules, instead of whole namespaces.
