// HOC : Higher Order Component
// 1. hoc => function
// input: component .... => output: NewComponent

// why? => to share logic(functionality) between component

// * قوانین نوشتن کامپوننت های مرتبه بالا
// * withاسم کامپوننت
// * example: withCounter

// ? ورودی اول یک کامپوننت دریافت می‌کنه و ورودی دوم یک لاجیک که اضافه می‌کنیم
// ? وروردی اول یک اررو فانکشن ریترن میکنه

// const Wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

const Wrapper = (WarpperedComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WarpperedComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
