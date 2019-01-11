import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/coupon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coupons: Coupon[] = [];
  coupon: Coupon = { title:'' , textPreview : ''};
  toggle: boolean = true;
  display = 'none';
  constructor() { }
  getStarCount(cpn: Coupon): number {
    let coupon = this.coupons.find(x => x.Id == cpn.Id);
    let count = coupon.rating.filter(x => x == true).length;
    return count;
  }
  openCouponModal(cpn: Coupon) {
    let coupon = this.coupons.find(x => x.Id == cpn.Id);
    if (coupon) {
      this.coupon = coupon;
      this.display = 'block';
    }
  }
  onCloseHandled() {
    this.display = 'none';
  }
  togle() {
    this.toggle = !this.toggle;
  }
  ngOnInit() {
    this.coupons = [
      {
        Id: 1,
        storeImage: 'logo.png',
        textPreview: '50% OFF',
        title: '50% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '444 used, 66% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, true, true, false, false]
      },
      {
        Id: 2,
        storeImage: 'logo.png',
        textPreview: '30% OFF',
        title: '30% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 77% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, true, true, true, true]
      },
      {
        Id: 3,
        storeImage: 'logo.png',
        textPreview: '60% OFF',
        title: '60% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 100% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, false, false, false, false]
      },
      {
        Id: 4,
        storeImage: 'logo.png',
        textPreview: '75% OFF',
        title: '75% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 500% success rate',
        expires: 'Expires 28.03.2022',
        rating: [false, false, false, false, false]
      },
      {
        Id: 5,
        storeImage: 'logo.png',
        textPreview: '50% OFF',
        title: '50% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '444 used, 66% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, true, true, false, false]
      },
      {
        Id: 6,
        storeImage: 'logo.png',
        textPreview: '30% OFF',
        title: '30% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 77% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, true, true, true, true]
      },
      {
        Id: 7,
        storeImage: 'logo.png',
        textPreview: '60% OFF',
        title: '60% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 100% success rate',
        expires: 'Expires 28.03.2022',
        rating: [true, false, false, false, false]
      },
      {
        Id: 8,
        storeImage: 'logo.png',
        textPreview: '75% OFF',
        title: '75% OFF + Free shipping',
        storeLink: 'https://couponscms.com/demo/themes/coupy/store/coverfox_ins-2.html',
        ratingLink: 'https://couponscms.com/demo/themes/coupy/reviews/coverfox_ins-2.html#reviews',
        link: 'https://couponscms.com/demo/themes/coupy/plugin/click.html?coupon=2&amp;reveal_code=1&amp;backTo=http%3A%2F%2Fcouponscms.com%2Fdemo%2Fthemes%2Fcoupy%2F%3FdemoId%3D2%26cid%3D2',
        stats: '200 used, 500% success rate',
        expires: 'Expires 28.03.2022',
        rating: [false, false, false, false, false]
      }
    ];
  }
}
