// VueJS3 มีคุณสมบัติเป็น **** Reactive programming ****
// ทดสอบได้ใน inspect console ของ browser ต่างๆ
// มันมี Virtual DOM
// const app = Vue.createApp

const app = Vue.createApp({
  //สำหรับเรียกใช้ Data สำหรับตัวแปร
  data() {
    return {
      product: "iPhone 12",
      brand: "Apple",
      image: "./assets/images/iphone-12-red.png",
      description: "New iPhone 12 red",
      url: "https://www.apple.com",
      instock: true,
      inventory: 15,
      details: ["64GB", "128GB", "256GB"],
      variants: [
        { id: 239, color: "Red", image: "./assets/images/iphone-12-red.png" },
        {
          id: 240,
          color: "Purple",
          image: "./assets/images/iphone-12-purple.png",
        },
        {
          id: 250,
          color: "White",
          image: "./assets/images/iphone-12-white.png",
        },
      ],
      cart: 0,
    };
  },
  //สำหรับเรียกใช้ method
  methods: {
    //สร้าง function addToCart
    addToCart() {
      //   alert("OK");
      this.cart += 1;
      this.inventory -= 1;
    },
    //สร้าง function แสดงรูป
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },

  //เรียกใช้ computed โดยจะเป็นการทำงานโดยไม่ต้อง call function เหมือน method
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
  },
}).mount("#app");
