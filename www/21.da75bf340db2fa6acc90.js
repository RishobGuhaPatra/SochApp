(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5loH":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),i=t("ZZ/e"),u=t("iqUP"),r=(t("6233"),t("tt/k")),a=function(){function n(n,l,t){var e=this;this.activRoute=n,this.db=l,this.firebaseProvider=t,this.user_input="",this.User="Me",this.toUser="HealthBot",this.getroom=u.database().ref("rooms"),this.roomList=[],this.userid=localStorage.getItem("userid"),this.userChat=[],this.blockuserDetail=[],this.isBlock=!0,this.ReceiverUserDetails={},this.activRoute.params.subscribe(function(n){e.toId=n.id,e.paramData=n,e.userName=n.name}),this.PersonData=JSON.parse(localStorage.getItem("LoggedInUserData")),console.log(this.PersonData),this.currentUserId=localStorage.getItem("userid")}return n.prototype.ionViewWillEnter=function(){var n=this;this.getroom.on("value",function(l){n.getroomList(l)}),u.database().ref("User/"+this.toId).on("value",function(l){n.ReceiverUserDetails=l.val(),console.log("bl",n.ReceiverUserDetails)}),u.database().ref("User/"+this.currentUserId+"/blockuser").on("value",function(l){n.getBlockUserList(l)}),this.db.object("User/"+this.userid).valueChanges().subscribe(function(l){n.userdata=l}),this.db.object("User/"+this.toId).valueChanges().subscribe(function(l){n.todata=l})},n.prototype.ngOnInit=function(){},n.prototype.sendMsg=function(){return o.__awaiter(this,void 0,void 0,function(){var n,l,t,e;return o.__generator(this,function(o){return n={time:u.database.ServerValue.TIMESTAMP},console.log(n),console.log(n.time),l={time:u.database.ServerValue.TIMESTAMP,msg:this.user_input,sender_id:localStorage.getItem("userid"),reciver_id:this.toId},this.user_input&&(this.currentroom?(e=u.database().ref("rooms").child(this.currentroom.key).child("chat").push(l),this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,"",this.PersonData.name?this.PersonData.name:this.PersonData.username,this.user_input),this.user_input="",t=e.path.pieces_[e.path.pieces_.indexOf("chat")+1],console.log(e.path.pieces_[e.path.pieces_.indexOf("chat")+1]),u.database().ref("rooms").child(this.currentroom.key).update({last_messageKey:t})):this.addRoom(l)),[2]})})},n.prototype.getroomList=function(n){var l=this;if(this.roomList=[],n.forEach(function(n){var t=n.val();t.key=n.key,l.roomList.push(t)}),this.roomList.length>0)for(var t=0;t<this.roomList.length;t++)localStorage.getItem("userid")==this.roomList[t].sender_id&&this.toId==this.roomList[t].reciver_id?(this.currentroom=this.roomList[t],u.database().ref("/rooms/"+this.roomList[t].key+"/chat").on("value",function(n){l.getChatList(n)})):this.toId==this.roomList[t].sender_id&&localStorage.getItem("userid")==this.roomList[t].reciver_id&&(this.currentroom=this.roomList[t],u.database().ref("/rooms/"+this.roomList[t].key+"/chat").on("value",function(n){l.getChatList(n)}))},n.prototype.getChatList=function(n){var l=this;this.userChat=[],n.forEach(function(n){var t=n.val();t.key=n.key,l.userChat.push(t)})},n.prototype.addRoom=function(n){var l=this,t=this.db.list("rooms").push({sender_id:n.sender_id,sender_details:{name:this.PersonData.name?this.PersonData.name:this.PersonData.username,profilePic:this.PersonData.profilePic?this.PersonData.profilePic:"",phoneNo:this.PersonData.phoneNo?this.PersonData.phoneNo:""},reciver_id:n.reciver_id,reciver_details:{name:this.ReceiverUserDetails.name?this.ReceiverUserDetails.name:this.ReceiverUserDetails.username,profilePic:this.ReceiverUserDetails.profilePic?this.ReceiverUserDetails.profilePic:"",phoneNo:this.ReceiverUserDetails.phoneNo?this.ReceiverUserDetails.phoneNo:""},chat:[]});t&&(console.log("res",t),u.database().ref("rooms").child(t.key).child("chat").push(n).then(function(n){l.firebaseProvider.sendNotificationNew(l.ReceiverUserDetails.device_token,"",l.PersonData.name?l.PersonData.name:l.PersonData.username,l.user_input),u.database().ref("rooms").child(t.key).child("chat").once("value",function(n){u.database().ref("rooms").child(t.key).update({last_messageKey:Object.keys(n.val())[0]})})}),this.currentroom=n),this.user_input=""},n.prototype.senderSends=function(){var n=this;this.loader=!0,this.scrollDown(),setTimeout(function(){n.msgList.push({userId:n.User,userName:n.User,userAvatar:"../../../../assets/chat/chat/chat5.jpg",time:"12:01",message:"Sorry, didn't get what you said. Can you repeat that please"}),n.loader=!1,n.scrollDown()},2e3)},n.prototype.scrollDown=function(){var n=this;setTimeout(function(){n.content.scrollToBottom(50)},200)},n.prototype.something=function(n){n.preventDefault()},n.prototype.userTyping=function(n){this.start_typing=n.target.value,this.scrollDown()},n.prototype.getBlockUserList=function(n){var l=this;if(n.forEach(function(n){var t=n.val();t.key=n.key,l.blockuserDetail.push(t)}),this.blockuserDetail.length>0)for(var t=0;t<this.blockuserDetail.length;t++){if(this.toId==this.blockuserDetail[t].uid){this.isBlock=!1,this.selectedblockuser=this.blockuserDetail[t];break}this.isBlock=!0}else this.isBlock=!0},n.prototype.blockunblock=function(){if(this.isBlock){var n={uid:this.toId};this.db.list("User/"+this.currentUserId+"/blockuser").push(n),this.isBlock=!1}else u.database().ref("User").child(this.currentUserId).child("blockuser").child(this.selectedblockuser.key).remove(),this.isBlock=!0},n}(),s=function(){return function(){}}(),c=t("pMnS"),d=t("oBZk"),b=t("Ip0R"),h=t("gIcY"),p=t("ZYCi"),g=t("3iKN"),f=e.nb({encapsulation:0,styles:[["@charset \"UTF-8\";ion-content[_ngcontent-%COMP%]{--background:url('bkg.0dcb7eb64f48a5880075.png') 0 0/100% 100% no-repeat;--opacity:1%}ion-header[_ngcontent-%COMP%]{--background:#ffffff}ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:white;--inner-border-width:0}ion-list[_ngcontent-%COMP%]{background:0 0;padding-top:20px;margin-bottom:0}.imageAvatarRight[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarRight[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:justify;position:relative;background:#000;border-radius:25px 25px 25px 0;max-width:72vw;box-shadow:-1px 1px 5px rgba(0,0,0,.2)}.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500}.imageAvatarRight[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarRight[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarLeft[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:left;position:relative;background:#f0cc6b;border-radius:25px 25px 0;max-width:72vw;box-shadow:1px 1px 5px #f0cc6b}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500}.imageAvatarLeft[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}ion-fab-button[_ngcontent-%COMP%]{width:47px!important;height:47px!important}ion-fab[_ngcontent-%COMP%]{bottom:-22px!important}.footerIcon[_ngcontent-%COMP%]{color:rgba(244,245,248,.7)}ion-input[_ngcontent-%COMP%]{--placeholder-color:rgb(56, 56, 56)}.chatDivLoader[_ngcontent-%COMP%]{position:relative;background:#e2ce16;border-radius:16px;min-width:80px;max-width:80px;display:flex;align-items:center;color:#f0cc6b;padding:2px;display:flex;justify-content:center}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{background:#f0cc6b;height:10px;width:10px;position:absolute;left:-4px;bottom:-2px;border-radius:5px}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:3px;background:#fff;position:absolute;top:7px;left:-7px}.title[_ngcontent-%COMP%]{color:#222222c7}ion-text[_ngcontent-%COMP%]{font-size:12px;color:#838383c7}ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.imageAvatarBottomLoader[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:8px;z-index:11}.hidden[_ngcontent-%COMP%]{visibility:hidden}.loading-col[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{justify-content:flex-start;padding-left:20px}.left[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:20px}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{height:36px;width:36px;background:0 0;position:absolute;left:-35px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:18px;background:0 0;box-shadow:15px 15px 0 0 #4b4b4b}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]{height:36px;width:36px;background:0 0;position:absolute;right:-35px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]   .corner-child-left[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:18px;background:0 0;box-shadow:-15px 15px 0 0 #f0cc6b}.input-box[_ngcontent-%COMP%]{color:rgba(82,82,82,.918)}"]],data:{}});function m(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,4,"ion-button",[["color","dark"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.blockunblock()&&e),e},d.hb,d.d)),e.ob(1,49152,null,0,i.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(2,0,null,0,1,"ion-icon",[["name","notifications-off"]],null,null,null,d.zb,d.v)),e.ob(3,49152,null,0,i.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Fb(-1,0,["Block"]))],function(n,l){n(l,1,0,"dark"),n(l,3,0,"notifications-off")},null)}function x(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,4,"ion-button",[["color","dark"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.blockunblock()&&e),e},d.hb,d.d)),e.ob(1,49152,null,0,i.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(2,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,d.zb,d.v)),e.ob(3,49152,null,0,i.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Fb(-1,0,["UnBlock"]))],function(n,l){n(l,1,0,"dark"),n(l,3,0,"notifications")},null)}function v(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[],null,null,null,d.Ab,d.w)),e.ob(1,49152,null,0,i.D,[e.h,e.k,e.z],{src:[0,"src"]},null)],function(n,l){var t=l.component;n(l,1,0,e.rb(2,"https://ucarecdn.com/",t.todata.profilePic,"/",t.scaleCrop,"/ "))},null)}function C(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[["src","assets/icon/user.png"]],null,null,null,d.Ab,d.w)),e.ob(1,49152,null,0,i.D,[e.h,e.k,e.z],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"assets/icon/user.png")},null)}function k(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,26,"ion-row",[],null,null,null,d.Sb,d.O)),e.ob(1,49152,null,0,i.ib,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,24,"ion-col",[["class","right"],["color","dark"],["no-padding",""]],null,null,null,d.qb,d.m)),e.ob(3,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(4,{clubbed:0}),e.ob(5,49152,null,0,i.t,[e.h,e.k,e.z],null,null),(n()(),e.pb(6,0,null,0,20,"div",[["class","imageAvatarRight"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,10,"div",[["class","imageAvatarBottom"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,9,"ion-avatar",[["class","avatar"]],null,null,null,d.fb,d.b)),e.ob(9,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ob(10,49152,null,0,i.f,[e.h,e.k,e.z],null,null),(n()(),e.pb(11,0,null,0,2,"div",[["class","imageAvatarBottomIcon"]],null,null,null,null,null)),(n()(),e.pb(12,0,null,null,1,"ion-icon",[["color","light"],["expand","icon-only"],["name","add"]],null,null,null,d.zb,d.v)),e.ob(13,49152,null,0,i.C,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(15,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(17,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(18,0,null,null,8,"ion-label",[["color","light"]],null,null,null,d.Ib,d.E)),e.ob(19,49152,null,0,i.N,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(20,0,null,0,6,"div",[["class","chatDiv"],["color","dark"]],null,null,null,null,null)),e.ob(21,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(22,{sharper:0,"sharper-top":1,"sharper-bottom":2}),(n()(),e.pb(23,0,null,null,1,"p",[["color","dark"],["padding",""],["text-wrap",""]],null,null,null,null,null)),(n()(),e.Fb(24,null,[""," "])),(n()(),e.pb(25,0,null,null,1,"div",[["class","corner-parent-right"]],null,null,null,null,null)),(n()(),e.pb(26,0,null,null,0,"div",[["class","corner-child-right"]],null,null,null,null,null))],function(n,l){var t=l.component,e=n(l,4,0,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id!=l.parent.context.$implicit.sender_id||!t.userChat[l.parent.context.index+1]);n(l,3,0,"right",e),n(l,9,0,"avatar",t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id?"hidden":""),n(l,13,0,"light","add"),n(l,15,0,t.todata&&t.todata.profilePic),n(l,17,0,!t.todata||!t.todata.profilePic),n(l,19,0,"light");var o=n(l,22,0,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id&&t.userChat[l.parent.context.index-1]&&t.userChat[l.parent.context.index-1].sender_id==l.parent.context.$implicit.sender_id,t.userChat[l.parent.context.index-1]&&t.userChat[l.parent.context.index-1].sender_id==l.parent.context.$implicit.sender_id,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id);n(l,21,0,"chatDiv",o)},function(n,l){n(l,24,0,l.parent.context.$implicit.msg)})}function _(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[],null,null,null,d.Ab,d.w)),e.ob(1,49152,null,0,i.D,[e.h,e.k,e.z],{src:[0,"src"]},null)],function(n,l){var t=l.component;n(l,1,0,e.rb(2,"https://ucarecdn.com/",t.userdata.profilePic,"/",t.scaleCrop,"/ "))},null)}function P(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[["src","assets/icon/user.png"]],null,null,null,d.Ab,d.w)),e.ob(1,49152,null,0,i.D,[e.h,e.k,e.z],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"assets/icon/user.png")},null)}function O(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,26,"ion-row",[],null,null,null,d.Sb,d.O)),e.ob(1,49152,null,0,i.ib,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,24,"ion-col",[["class","left"],["no-padding",""]],null,null,null,d.qb,d.m)),e.ob(3,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(4,{clubbed:0}),e.ob(5,49152,null,0,i.t,[e.h,e.k,e.z],null,null),(n()(),e.pb(6,0,null,0,20,"div",[["class","imageAvatarLeft"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,8,"ion-label",[["color","light"]],null,null,null,d.Ib,d.E)),e.ob(8,49152,null,0,i.N,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(9,0,null,0,6,"div",[["class","chatDiv"],["color","dark"]],null,null,null,null,null)),e.ob(10,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(11,{sharper:0,"sharper-top":1,"sharper-bottom":2}),(n()(),e.pb(12,0,null,null,1,"p",[["color","dark"],["padding",""],["text-wrap",""]],null,null,null,null,null)),(n()(),e.Fb(13,null,["",""])),(n()(),e.pb(14,0,null,null,1,"div",[["class","corner-parent-left"]],null,null,null,null,null)),(n()(),e.pb(15,0,null,null,0,"div",[["class","corner-child-left"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,10,"div",[["class","imageAvatarBottom"]],null,null,null,null,null)),(n()(),e.pb(17,0,null,null,9,"ion-avatar",[["class","avatar"]],null,null,null,d.fb,d.b)),e.ob(18,278528,null,0,b.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ob(19,49152,null,0,i.f,[e.h,e.k,e.z],null,null),(n()(),e.pb(20,0,null,0,2,"div",[["class","imageAvatarBottomIcon"]],null,null,null,null,null)),(n()(),e.pb(21,0,null,null,1,"ion-icon",[["color","light"],["expand","icon-only"],["name","add"]],null,null,null,d.zb,d.v)),e.ob(22,49152,null,0,i.C,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.gb(16777216,null,0,1,null,_)),e.ob(24,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,P)),e.ob(26,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,e=n(l,4,0,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id!=l.parent.context.$implicit.sender_id||!t.userChat[l.parent.context.index+1]);n(l,3,0,"left",e),n(l,8,0,"light");var o=n(l,11,0,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id&&t.userChat[l.parent.context.index-1]&&t.userChat[l.parent.context.index-1].sender_id==l.parent.context.$implicit.sender_id,t.userChat[l.parent.context.index-1]&&t.userChat[l.parent.context.index-1].sender_id==l.parent.context.$implicit.sender_id,t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id);n(l,10,0,"chatDiv",o),n(l,18,0,"avatar",t.userChat[l.parent.context.index+1]&&t.userChat[l.parent.context.index+1].sender_id==l.parent.context.$implicit.sender_id?"hidden":""),n(l,22,0,"light","add"),n(l,24,0,t.userdata&&t.userdata.profilePic),n(l,26,0,!t.userdata||!t.userdata.profilePic)},function(n,l){n(l,13,0,l.parent.context.$implicit.msg)})}function M(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,3,"ion-row",[],null,null,null,d.Sb,d.O)),e.ob(1,49152,null,0,i.ib,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,1,"ion-col",[],null,null,null,d.qb,d.m)),e.ob(3,49152,null,0,i.t,[e.h,e.k,e.z],null,null)],null,null)}function y(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,k)),e.ob(2,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,O)),e.ob(4,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,M)),e.ob(6,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.sender_id!=t.userid),n(l,4,0,l.context.$implicit.sender_id==t.userid),n(l,6,0,t.userChat[l.context.index+1]&&t.userChat[l.context.index+1].sender_id!=l.context.$implicit.sender_id||!t.userChat[l.context.index+1])},null)}function D(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,3,"ion-list",[],null,null,null,d.Jb,d.F)),e.ob(1,49152,null,0,i.O,[e.h,e.k,e.z],null,null),(n()(),e.gb(16777216,null,0,1,null,y)),e.ob(3,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.userChat)},null)}function z(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.vb,d.p)),e.ob(1,49152,null,0,i.w,[e.h,e.k,e.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.pb(2,0,null,0,3,"ion-fab-button",[],null,[[null,"click"],[null,"mousedown"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.sendMsg()&&e),"mousedown"===l&&(e=!1!==o.something(t)&&e),e},d.tb,d.q)),e.ob(3,49152,null,0,i.x,[e.h,e.k,e.z],null,null),(n()(),e.pb(4,0,null,0,1,"ion-icon",[["expand","icon-only"],["name","send"]],null,null,null,d.zb,d.v)),e.ob(5,49152,null,0,i.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"end","bottom"),n(l,5,0,"send")},null)}function w(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,19,"ion-row",[["padding-bottom",""]],null,null,null,d.Sb,d.O)),e.ob(1,49152,null,0,i.ib,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,17,"ion-col",[["class","loading-col"],["no-padding",""]],null,null,null,d.qb,d.m)),e.ob(3,49152,null,0,i.t,[e.h,e.k,e.z],null,null),(n()(),e.pb(4,0,null,0,15,"div",[["class","imageAvatarRight"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,7,"div",[["class","imageAvatarBottomLoader"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,6,"ion-avatar",[["class","avatar"]],null,null,null,d.fb,d.b)),e.ob(7,49152,null,0,i.f,[e.h,e.k,e.z],null,null),(n()(),e.pb(8,0,null,0,2,"div",[["class","imageAvatarBottomIcon"]],null,null,null,null,null)),(n()(),e.pb(9,0,null,null,1,"ion-icon",[["color","light"],["expand","icon-only"],["name","add"]],null,null,null,d.zb,d.v)),e.ob(10,49152,null,0,i.C,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.pb(11,0,null,0,1,"ion-img",[["src","../../assets/chat/chat5.jpg"]],null,null,null,d.Ab,d.w)),e.ob(12,49152,null,0,i.D,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.pb(13,0,null,null,6,"ion-label",[],null,null,null,d.Ib,d.E)),e.ob(14,49152,null,0,i.N,[e.h,e.k,e.z],null,null),(n()(),e.pb(15,0,null,0,4,"div",[["class","chatDivLoader"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,1,"ion-spinner",[["color","light"],["name","dots"]],null,null,null,d.Yb,d.U)),e.ob(17,49152,null,0,i.rb,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.pb(18,0,null,null,1,"div",[["class","corner-parent-right"]],null,null,null,null,null)),(n()(),e.pb(19,0,null,null,0,"div",[["class","corner-child-right"]],null,null,null,null,null))],function(n,l){n(l,10,0,"light","add"),n(l,12,0,"../../assets/chat/chat5.jpg"),n(l,17,0,"light","dots")},null)}function I(n){return e.Gb(0,[e.Db(402653184,1,{content:0}),(n()(),e.pb(1,0,null,null,17,"ion-header",[["translucent",""]],null,null,null,d.yb,d.u)),e.ob(2,49152,null,0,i.B,[e.h,e.k,e.z],{translucent:[0,"translucent"]},null),(n()(),e.pb(3,0,null,0,15,"ion-toolbar",[],null,null,null,d.hc,d.db)),e.ob(4,49152,null,0,i.Bb,[e.h,e.k,e.z],null,null),(n()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.ib,d.e)),e.ob(6,49152,null,0,i.l,[e.h,e.k,e.z],null,null),(n()(),e.pb(7,0,null,0,2,"ion-back-button",[["defaultHref","tabs"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.zb(n,9).onClick(t)&&o),o},d.gb,d.c)),e.ob(8,49152,null,0,i.g,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.ob(9,16384,null,0,i.h,[[2,i.hb],i.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),e.pb(10,0,null,0,2,"ion-title",[["color","dark"],["text-center",""]],null,null,null,d.fc,d.bb)),e.ob(11,49152,null,0,i.zb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,[" Soch Chat "])),(n()(),e.pb(13,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,d.ib,d.e)),e.ob(14,49152,null,0,i.l,[e.h,e.k,e.z],null,null),(n()(),e.gb(16777216,null,0,1,null,m)),e.ob(16,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,x)),e.ob(18,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(19,0,null,null,7,"ion-content",[["fullscreen","true"]],null,null,null,d.rb,d.n)),e.ob(20,49152,[[1,4],["IonContent",4]],0,i.u,[e.h,e.k,e.z],{fullscreen:[0,"fullscreen"]},null),(n()(),e.gb(16777216,null,0,1,null,D)),e.ob(22,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,z)),e.ob(24,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,w)),e.ob(26,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(27,0,null,null,14,"ion-footer",[["translucent",""]],null,null,null,d.wb,d.s)),e.ob(28,49152,null,0,i.z,[e.h,e.k,e.z],{translucent:[0,"translucent"]},null),(n()(),e.pb(29,0,null,0,12,"ion-toolbar",[],null,null,null,d.hc,d.db)),e.ob(30,49152,null,0,i.Bb,[e.h,e.k,e.z],null,null),(n()(),e.pb(31,0,null,0,10,"ion-item",[],null,null,null,d.Hb,d.z)),e.ob(32,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.pb(33,0,null,0,1,"ion-icon",[["class","footerIcon"],["color","dark"],["expand","icon-only"],["name","camera"],["slot","start"]],null,null,null,d.zb,d.v)),e.ob(34,49152,null,0,i.C,[e.h,e.k,e.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.pb(35,0,null,0,6,"ion-input",[["class","input-box"],["placeholder","Write a message..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.zb(n,36)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.zb(n,36)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(i.user_input=t)&&o),"keypress"===l&&(o=!1!==i.userTyping(t)&&o),o},d.Cb,d.y)),e.ob(36,16384,null,0,i.Ob,[e.k],null,null),e.Cb(1024,null,h.c,function(n){return[n]},[i.Ob]),e.ob(38,671744,null,0,h.f,[[8,null],[8,null],[8,null],[6,h.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,h.d,null,[h.f]),e.ob(40,16384,null,0,h.e,[[4,h.d]],null,null),e.ob(41,49152,null,0,i.G,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null)],function(n,l){var t=l.component;n(l,2,0,""),n(l,8,0,"tabs"),n(l,9,0,"tabs"),n(l,11,0,"dark"),n(l,16,0,t.isBlock),n(l,18,0,!t.isBlock),n(l,20,0,"true"),n(l,22,0,t.userChat),n(l,24,0,t.isBlock),n(l,26,0,t.loader),n(l,28,0,""),n(l,34,0,"dark","camera"),n(l,38,0,t.user_input),n(l,41,0,"Write a message...","text")},function(n,l){n(l,35,0,e.zb(l,40).ngClassUntouched,e.zb(l,40).ngClassTouched,e.zb(l,40).ngClassPristine,e.zb(l,40).ngClassDirty,e.zb(l,40).ngClassValid,e.zb(l,40).ngClassInvalid,e.zb(l,40).ngClassPending)})}function L(n){return e.Gb(0,[(n()(),e.pb(0,0,null,null,1,"app-bubble",[],null,null,null,I,f)),e.ob(1,114688,null,0,a,[p.a,g.a,r.a],null,null)],function(n,l){n(l,1,0)},null)}var A=e.lb("app-bubble",a,L,{},{},[]),B=t("hDTV"),j=t("NKHs");t.d(l,"BubblePageModuleNgFactory",function(){return U});var U=e.mb(s,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,A]],[3,e.j],e.x]),e.xb(4608,b.l,b.k,[e.u,[2,b.s]]),e.xb(4608,h.j,h.j,[]),e.xb(4608,i.b,i.b,[e.z,e.g]),e.xb(4608,i.Hb,i.Hb,[i.b,e.j,e.q]),e.xb(4608,i.Lb,i.Lb,[i.b,e.j,e.q]),e.xb(4608,g.a,g.a,[B.d,[2,B.c],[2,j.b],e.B,e.z]),e.xb(1073742336,b.b,b.b,[]),e.xb(1073742336,h.i,h.i,[]),e.xb(1073742336,h.a,h.a,[]),e.xb(1073742336,i.Db,i.Db,[]),e.xb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),e.xb(1073742336,s,s,[]),e.xb(1024,p.k,function(){return[[{path:"",component:a}]]},[])])})}}]);