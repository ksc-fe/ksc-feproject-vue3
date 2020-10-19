<template>
    <div class="page-wrapper">
        <div>
            <span>count 点击次数: </span>
            <span>{{ count }}</span>
            <Button @click="addCount">点击增加</Button>
        </div>
        <div>
            <span>num 点击次数: </span>
            <span>{{ num }}</span>
            <button @click="addNum">点击增加</button>
        </div>
        <div>
            <span>count + num 总次数: </span>
            <span>{{ totalCount }}</span>
        </div>
        <div>
            <span>count加倍次数: </span>
            <span>{{ double }}</span>
        </div>
        <div>
            <button @click="openModal">打开弹框(With teleport!)</button>
            <teleport to="#endofbody">
                <div v-if="isModalOpen" class="modal">这是弹框内容</div>
            </teleport>
        </div>
    </div>
</template>

<script>
import {
    computed,
    reactive,
    ref,
    toRefs,
    watch,
    watchEffect,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';

import Button from 'kpc-vue/components/button';

export default {
    name: 'Test',
    components: {
        Button
    },
    setup() {
        // reactive处理的是对象的双向绑定
        const state = reactive({
            count: 0,
            double: computed(() => {
                return state.count * 2;
            }),
            midObj: {
                innerObj: {
                    size: 0
                }
            }
        });

        // ref处理基础类型的双向绑定
        const num = ref(0);

        const addCount = function() {
            state.count++;
        };

        // js需访问num.value, 模版会自动解值{{ num }}
        const addNum = function() {
            num.value++;
        };

        // computed计算属性
        const totalCount = computed(() => state.count + num.value);
        // const doubleCount = computed({
        //     get() {
        //         return state.count * 2;
        //     },
        //     set(newVal) {
        //         state.count = newVal / 2;
        //     }
        // });

        // watch
        watch(
            () => totalCount.value,
            (newVal, oldVal) => {
                console.log(`count + num = ${newVal}`);
            }
        );

        // 监听单个属性, immediate
        watch(
            () => totalCount.value,
            (newVal, oldVal) => {
                console.log(`count + num = ${newVal}, immediate=true`);
            },
            {
                immediate: true
            }
        );

        // 监听单个属性, deep
        watch(
            () => state.midObj,
            (newVal, oldVal) => {
                console.log(
                    `state.midObj = ${JSON.stringify(newVal)}, deep=true`
                );
            },
            {
                deep: true
            }
        );
        setTimeout(() => {
            state.midObj.innerObj.size = 1;
        }, 2000);

        // 副作用，会立即执行
        let callTimes = 0;
        const stopEffect = watchEffect(() => {
            console.log('watchEffect is called!');
            const div = document.createElement('div');
            div.textContent = `totalCount is ${totalCount.value}`;
            document.body.appendChild(div);
            // 调用 5 次后，取消effect监听
            callTimes++;
            if (callTimes >= 5) stopEffect();
        });

        // 生命周期方法
        onBeforeMount(() => {
            console.log('component is onBeforeMount');
        });
        onMounted(() => {
            console.log('component is onMounted');
        });
        onBeforeUpdate(() => {
            console.log('component is onBeforeUpdate');
        });
        onUpdated(() => {
            console.log('component is onUpdated');
        });
        onBeforeUnmount(() => {
            console.log('component is onBeforeUnmount');
        });
        onUnmounted(() => {
            console.log('component is onUnmounted');
        });

        const isModalOpen = ref(false);
        const openModal = function() {
            isModalOpen.value = true;
        };

        return {
            // 响应式展开state property
            ...toRefs(state),
            num,
            addCount,
            addNum,
            totalCount,
            // doubleCount
            isModalOpen,
            openModal
        };
    }
};
</script>
