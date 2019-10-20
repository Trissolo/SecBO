(this.webpackJsonpsecbo=this.webpackJsonpsecbo||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(3),r=a.n(i);a(2);class l extends s.Component{constructor(...t){super(...t),this.state={}}componentDidMount(){this.refesh()}refesh(t="",e=""){this.setState({text:"",binary:"1011011 1110011 1100101 1100011 1100010 1101111 1011101  1011011 101111 1110011 1100101 1100011 1100010 1101111 1011101",image:t,name:e})}handleChange(t){this.setState({text:t.target.value,binary:this.textToBinary(t.target.value)})}textToBinary(t){return`[secbo]${t}[/secbo]`.split("").map(t=>t.charCodeAt(0).toString(2)+" ").join("")}binaryToText(t){return t.split(" ").map(t=>String.fromCharCode(parseInt(t,2))).join("")}uploadImage(t){t.preventDefault();const e=new FileReader,a=new Image,s=t.dataTransfer.files[0];"image/png"===s.type?e.readAsDataURL(s):alert("Invalid format. Use a PNG image."),e.onload=t=>{try{a.onload=()=>{this.refesh(a,s.name),this.updateCanvas(),this.readAlpha(),this.getDownload()},a.src=t.target.result}catch(e){alert("File failed to load.")}}}updateCanvas(t){const e=this.refs.canvas.getContext("2d");e.canvas.width=this.state.image.width,e.canvas.height=this.state.image.height,e.drawImage(this.state.image,0,0)}readAlpha(){const t=this.refs.canvas.getContext("2d"),e=t.getImageData(0,0,t.canvas.width,t.canvas.height).data.reduce((t,e,a)=>{if(a>0&&(a+1)%4===0){if(253===e)return t+" ";if(254===e)return t+"1";if(255===e)return t+"0"}return t},""),a=this.binaryToText(e);a.startsWith("[secbo]")&&a.substring(0,a.length-1).endsWith("[/secbo]")&&this.setState({text:a.substring(7,a.length-9)})}writeAlpha(){const t=this.refs.canvas.getContext("2d");let e=t.getImageData(0,0,t.canvas.width,t.canvas.height);e.data.length/4>=this.state.binary.length?(e.data.forEach((t,a)=>{a>0&&(a+1)%4===0&&(e.data[a]=255)}),this.state.binary.split("").forEach((t,a)=>{"1"===t&&(e.data[4*a+3]=254)," "===t&&(e.data[4*a+3]=253)}),t.putImageData(e,0,0),this.getDownload()):alert("The image was too small to contain all this data.")}getDownload(){this.setState({dl:this.refs.canvas.toDataURL("image/png")})}render(){if(!this.state.binary)return n.a.createElement("p",null,"loading...");const t=this.state.image.width*this.state.image.height,e=t-this.state.binary.length,a={};return a.color=e<0?"red":"black",n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"SecBO"),n.a.createElement("div",{className:"ImageUploader",onDrop:t=>{this.uploadImage(t)},onDragEnter:t=>{t.preventDefault()},onDragOver:t=>{t.preventDefault()}},this.state.image?n.a.createElement("img",{className:"ImagePreview",src:this.state.image.src,alt:"thumbnail"}):n.a.createElement("span",null,"drag an image file here")),n.a.createElement("div",{className:"Info"},this.state.image&&`${t} total pixels, `,n.a.createElement("span",{style:a},this.state.image&&`${e} still available`)),n.a.createElement("textarea",{rows:"15",cols:"50",value:this.state.text,onChange:t=>{this.handleChange(t)}}),n.a.createElement("br",null),n.a.createElement("canvas",{ref:"canvas"}),n.a.createElement("br",null),this.state.text.length>0&&this.state.image.src&&e>=0&&n.a.createElement("a",{href:this.state.dl,download:this.state.name,onClick:()=>{this.writeAlpha()}},"download"),this.state.image.src&&n.a.createElement("button",{onClick:()=>{this.refesh()}},"clear"))}}r.a.render(n.a.createElement(l,null),document.getElementById("root"))},2:function(t,e,a){},4:function(t,e,a){t.exports=a(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.b1b032cd.chunk.js.map