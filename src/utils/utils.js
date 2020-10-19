let utils = {
    /**
     * 生成一个map函数，通过key获取对应的值，如果没有则返回原key
     */
    keyMap: function(map) {
        return function(key) {
            if (!arguments.length) {
                return map;
            }
            return map[key] || key;
        };
    }
};
export default utils;
