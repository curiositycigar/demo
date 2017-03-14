/**
 * Created by YOU on 2017/3/13.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import body1 from '@/components/body/body1.vue';
import body2 from '@/components/body/body2.vue';
import body3 from '@/components/body/body3.vue';
import body4 from '@/components/body/body4.vue';
import body5 from '@/components/body/body5.vue';
import body6 from '@/components/body/body6.vue';
import body7 from '@/components/body/body7.vue';
import section from '@/components/section/section';
import section1 from '@/components/section/section1';
import section2 from '@/components/section/section2';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/1',
      component: body1,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    },
    {
      path: '/2',
      component: body2,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section1
        },
        {
          path: '1',
          component: section1
        },
        {
          path: '2',
          component: section2
        },
        {
          path: '3',
          component: section
        },
        {
          path: '4',
          component: section
        }
      ]
    },
    {
      path: '/3',
      component: body3,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    },
    {
      path: '/4',
      component: body4,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    },
    {
      path: '/5',
      component: body5,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    },
    {
      path: '/6',
      component: body6,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    },
    {
      path: '/7',
      component: body7,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next(to.path + '/1');
          },
          component: section
        },
        {
          path: '1',
          component: section
        },
        {
          path: '2',
          component: section
        },
        {
          path: '3',
          component: section
        }
      ]
    }
  ],
  linkActiveClass: 'active'
});

router.push('/2/1');

export default router;
