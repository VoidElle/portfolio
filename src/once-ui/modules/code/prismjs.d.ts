declare module "@/once-ui/modules/code/prismjs" {
  const Prism: {
    highlightAll: () => void;
    highlight: (code: string, grammar: any, language: string) => string;
    languages: {
      [language: string]: any;
    };
  };
  export default Prism;
}
