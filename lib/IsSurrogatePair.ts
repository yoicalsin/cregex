export default (): RegExp => {
   return /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
};
