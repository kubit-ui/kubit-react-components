declare module '*.json' {
  const value: any;
  export default value;
}

declare module './bundle-sizes.json' {
  interface BundleSizeData {
    components: Record<
      string,
      {
        component: string;
        sizes: {
          css: {
            formatted: string;
            gzip: number;
            gzipFormatted: string;
            raw: number;
          };
          js: {
            formatted: string;
            gzip: number;
            gzipFormatted: string;
            raw: number;
          };
          total: {
            formatted: string;
            gzip: number;
            gzipFormatted: string;
            raw: number;
          };
        };
        timestamp: string;
        treeshakeable: boolean;
      }
    >;
    metadata: {
      generated: string;
      totalComponents: number;
      totalSize: {
        formatted: string;
        gzip: number;
        gzipFormatted: string;
        raw: number;
      };
    };
  }

  const data: BundleSizeData;
  export default data;
}
