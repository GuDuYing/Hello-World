
Page({
	data:{
		message:'hello 小程序',
		list:[]
	},
	onLoad(){
		//this.setData({
		//	message:Date.now()
		//})
		const _this = this;
		wx.request({
		  url: 'http://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
		  data: {
		  },
		  header: {
		      'Content-Type': 'application/json'
		  },
		  success: function(res) {
		    _this.setData({
		    	list:res.data.subjects
		    })
		  }
		})
	}
})