import React, { PureComponent } from "react";

// ? این نوع کامپوننت که از پیور کامپوننت ارث بری کرده به صورت پیش فرض
// ? در داخل خودش فاز
// ? shouldComponentUpdate
// ? رو داره و میاد استیت و پراپس رو مقایسه میکنه و جلوی رندرهای اضافی رو میگیره
// prevState + prevProps => shouldComponentUpdate
// * این نکته بهینه‌سازی است

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>Pure comp - {this.props.name}</div>;
  }
}

export default PureComp;
