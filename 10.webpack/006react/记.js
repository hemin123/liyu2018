

// 类型校验https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Son.propTypes={
	index:propTypes.number,
	content:propTypes.string,
	handledel:propTypes.func.isRequired
}

//默认值
Son.defaultProps ={


执行顺序

只要state有改变 render方法就会被执行

	state  pr
父组件render 那个父组件里包函的子组件都执行一遍（render）


数据
模板
虚拟DOM操作

数据改变时候重新生成虚拟DOM
通过diff算法，找出来不同，然后替换


生命周期函数
https://reactjs.org/docs/state-and-lifecycle.html



ui库


ant design https://ant.design/index-cn
















