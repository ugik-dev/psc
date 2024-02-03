"use strict";$((function(){var e=$(".datatables-projects");if(e.length){e.DataTable({ajax:assetsPath+"json/user-profile.json",columns:[{data:""},{data:"id"},{data:"project_name"},{data:"project_leader"},{data:""},{data:"status"},{data:""}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,a,t,r){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,responsivePriority:4,render:function(e,a,t,r){var s=t.project_img,d=t.project_name,n=t.date;if(s)var i='<img src="'+assetsPath+"img/icons/brands/"+s+'" alt="Avatar" class="rounded-circle">';else{var l=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],c=(d=t.project_name).match(/\b\w/g)||[];i='<span class="avatar-initial rounded-circle bg-label-'+l+'">'+(c=((c.shift()||"")+(c.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">'+i+'</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium">'+d+'</span><small class="text-truncate text-muted">'+n+"</small></div></div>"}},{targets:4,orderable:!1,searchable:!1,render:function(e,a,t,r){var s,d=t.team;s='<div class="d-flex align-items-center avatar-group">';for(var n=0;n<d.length;n++)s+='<div class="avatar avatar-sm"><img src="'+assetsPath+"img/avatars/"+d[n]+'" alt="Avatar" class="rounded-circle pull-up"></div>';return s+="</div>"}},{targets:-2,render:function(e,a,t,r){var s=t.status;return'<div class="d-flex align-items-center"><div class="progress w-100 me-3 rounded" style="height: 6px;"><div class="progress-bar rounded" style="width: '+s+'" aria-valuenow="'+s+'" aria-valuemin="0" aria-valuemax="100"></div></div><span>'+s+"</span></div>"}},{targets:-1,searchable:!1,title:"Actions",orderable:!1,render:function(e,a,t,r){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical mdi-24px text-muted"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div>'}}],order:[[2,"desc"]],dom:'<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:7,lengthMenu:[7,10,25,50,75,100],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return'Details of "'+e.data().project_name+'" Project'}}),type:"column",renderer:function(e,a,t){var r=$.map(t,(function(e,a){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""})).join("");return!!r&&$('<table class="table"/><tbody />').append(r)}}}});$("div.head-label").html('<h5 class="card-title mb-0">Projects</h5>')}}));
