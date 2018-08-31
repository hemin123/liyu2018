import React,{ Component } from 'react';

import Simditor  from 'simditor'
import $  from 'jquery'

import 'simditor/styles/simditor.css';
// overflow:hidden富文本样式
class RichEditor  extends Component{
	constructor(props){
		super(props);

		this.toolbar=[
		  'title',
		  'bold',
		  'italic',
		  'underline',
		  'strikethrough',
		  'fontScale',
		  'color',
		  'ol'    ,        
		  'ul'     ,       
		  'blockquote',
		  'code'   ,   
		  'table',
		  'link',
		  'image',
		  'hr'  ,        
		  'indent',
		  'outdent',
		  'alignment'
		];

		$.ajaxSetup({
			xhrFields :{
				withCredentials:true
			}
		})
	}

	componentDidMount(){
		this.editor = new Simditor({
		  textarea: this.textarea,
		  toolbar:this.toolbar,
		  upload:{
		  		url:this.props.url,
		  		fileKey:'upload_'

		  },
		});
		this.editor.on('valuechanged',()=>{
			this.props.getRichEditorValue(this.editor.getValue())
		})
	}
		render(){
			return (
			
					<textarea ref={(textarea)=>{
						this.textarea =textarea
					}}></textarea>
				
			)
		}

}
export default RichEditor

