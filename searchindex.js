Search.setIndex({docnames:["client","config","const","index","quantizer","runtime","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["client.rst","config.rst","const.rst","index.rst","quantizer.rst","runtime.rst","utils.rst"],objects:{"furiosa.client.compiler":{CompileTask:[0,0,1,""],CompilerClient:[0,0,1,""]},"furiosa.client.compiler.CompileTask":{get_compiler_report:[0,1,1,""],get_dot_graph:[0,1,1,""],get_error_message:[0,1,1,""],get_ir:[0,1,1,""],get_logs:[0,1,1,""],get_memory_alloc_report:[0,1,1,""],is_completed:[0,1,1,""],is_failed:[0,1,1,""],is_succeeded:[0,1,1,""],list_artifacts:[0,1,1,""],phase:[0,1,1,""],task_id:[0,1,1,""],wait_for_complete:[0,1,1,""]},"furiosa.client.compiler.CompilerClient":{submit_compile:[0,1,1,""]},"furiosa.config":{ConfigLoader:[1,0,1,""],load_furiosa_config:[1,3,1,""],set_apikey:[1,3,1,""]},"furiosa.config.ConfigLoader":{apply:[1,1,1,""]},"furiosa.quantizer.frontend.onnx":{__init__:[4,2,0,"-"]},"furiosa.quantizer.frontend.onnx.__init__":{build_calibration_model:[4,3,1,""],calibrate:[4,3,1,""],calibrate_with_random:[4,3,1,""],export_spec:[4,3,1,""],optimize_model:[4,3,1,""],post_training_quantization_with_random_calibration:[4,3,1,""],post_training_quantize:[4,3,1,""],quantize:[4,3,1,""]},"furiosa.quantizer.ir.common":{operator:[4,2,0,"-"]},"furiosa.quantizer.ir.common.operator":{HeightWidth:[4,0,1,""],HorizontalPadding:[4,0,1,""],Padding:[4,0,1,""]},"furiosa.quantizer.ir.spec":{__init__:[4,2,0,"-"]},"furiosa.runtime":{errors:[5,2,0,"-"],session:[5,2,0,"-"],tensor:[5,2,0,"-"]},"furiosa.runtime.errors":{ApiClientInitFailed:[5,0,1,""],CompilationFailed:[5,0,1,""],IncompatibleApiClientError:[5,0,1,""],IncompatibleModel:[5,0,1,""],InternalError:[5,0,1,""],InvalidYamlException:[5,0,1,""],NativeError:[5,0,1,""],NoApiKeyException:[5,0,1,""],NuxException:[5,0,1,""],UnsupportedTensorType:[5,0,1,""],is_err:[5,3,1,""],is_ok:[5,3,1,""]},"furiosa.runtime.errors.NuxException":{message:[5,1,1,""],native_error:[5,1,1,""]},"furiosa.runtime.model":{Model:[5,0,1,""]},"furiosa.runtime.model.Model":{allocate_inputs:[5,1,1,""],allocate_outputs:[5,1,1,""],create_outputs:[5,1,1,""],input:[5,1,1,""],input_num:[5,1,1,""],inputs:[5,1,1,""],output:[5,1,1,""],output_num:[5,1,1,""],outputs:[5,1,1,""],print_summary:[5,1,1,""],summary:[5,1,1,""]},"furiosa.runtime.session":{AsyncSession:[5,0,1,""],CompletionQueue:[5,0,1,""],Session:[5,0,1,""],create:[5,3,1,""],create_async:[5,3,1,""]},"furiosa.runtime.session.AsyncSession":{close:[5,1,1,""],submit:[5,1,1,""]},"furiosa.runtime.session.CompletionQueue":{close:[5,1,1,""],recv:[5,1,1,""]},"furiosa.runtime.session.Session":{close:[5,1,1,""],run:[5,1,1,""]},"furiosa.runtime.tensor":{Axis:[5,0,1,""],DataType:[5,0,1,""],Tensor:[5,0,1,""],TensorArray:[5,0,1,""],TensorDesc:[5,0,1,""],numpy_dtype:[5,3,1,""]},"furiosa.runtime.tensor.DataType":{numpy_dtype:[5,1,1,""]},"furiosa.runtime.tensor.Tensor":{copy_from:[5,1,1,""],desc:[5,4,1,""],dtype:[5,1,1,""],numpy:[5,1,1,""],numpy_dtype:[5,1,1,""],shape:[5,1,1,""]},"furiosa.runtime.tensor.TensorArray":{is_empty:[5,1,1,""],numpy:[5,1,1,""]},"furiosa.runtime.tensor.TensorDesc":{axis:[5,1,1,""],dim:[5,1,1,""],dtype:[5,1,1,""],format:[5,1,1,""],length:[5,1,1,""],ndim:[5,1,1,""],numpy_dtype:[5,1,1,""],shape:[5,1,1,""],size:[5,1,1,""]},"furiosa.utils":{get_sdk_version:[6,3,1,""],login_account:[6,3,1,""]},furiosa:{config:[1,2,0,"-"],consts:[2,2,0,"-"],utils:[6,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function","4":"py:attribute"},terms:{"byte":5,"class":[0,1,4,5],"const":3,"default":1,"float":4,"int":[4,5],"return":[1,4,5,6],"static":4,"true":[4,5],__init__:4,access:[1,5],access_key_id:1,across:5,addit:5,after:5,alia:5,all:5,alloc:5,allocate_input:5,allocate_output:5,allow:5,alreadi:5,also:5,ani:5,api:[0,1,5],api_cli:6,apicli:6,appli:1,applic:6,arg:[4,5],arrai:5,asynchron:5,base:4,belong:5,binari:5,bind:5,block:5,bool:[4,5],both:5,bottom:4,buffer:5,build_calibration_model:4,c_void_p:5,calibr:4,calibrate_with_random:4,call:5,caller:5,can:5,cannot:5,caus:5,channel:[4,5],check_interv:0,classload:1,client:[1,3,5,6],client_configur:1,close:5,come:5,commit:6,common:4,commonli:2,compil:5,compile_task:0,compiler_config:0,compiler_v1_api:0,compilercli:0,compilerv1api:0,compiletask:0,complet:5,config:3,configload:1,configur:1,constant:2,contain:[2,5],content:5,context:5,context_ti:5,conv:4,convert:5,copi:5,copy_from:5,correspond:5,correspondnig:5,creat:5,create_async:5,create_output:5,ctype:5,current:6,data:5,dataset:4,desc:5,descript:5,dict:4,dim:5,dimens:5,dtype:5,due:5,dynamic_rang:4,element:5,elig:5,err:5,estim:4,exampl:5,except:5,export_spec:4,extens:5,fail:5,fals:5,file:5,filter:4,first:[4,5],format:5,from:5,frontend:4,furiosa:[0,1,4,5,6],furiosa_sdk_quant:4,furiosa_sdk_runtim:5,furiosaai:1,furiosasdk:1,gener:5,get_compiler_report:0,get_dot_graph:0,get_error_messag:0,get_ir:0,get_log:0,get_memory_alloc_report:0,get_sdk_vers:6,git:6,given:5,has:5,hash:6,height:[4,5],heightwidth:4,horizontalpad:4,identifi:5,idx:5,imag:5,immedi:5,includ:5,incompat:5,infer:5,initi:5,input:5,input_num:5,intern:5,is_complet:0,is_empti:5,is_err:5,is_fail:0,is_ok:5,is_succeed:0,its:[0,5],kei:[1,5],layout:5,left:4,length:5,list:[4,5],list_artifact:0,load:1,load_furiosa_config:1,local:1,login_account:6,map:4,maximum:4,memori:5,messag:5,metadata:5,method:5,minimum:4,mode:4,model:4,modelproto:4,modul:6,msg:5,nativ:5,native_err:5,native_error:5,nchw:5,ndarrai:[4,5],ndim:5,next:5,nhwc:5,none:[0,1,4,5],npu:5,num_data:4,number:5,numpi:[4,5],numpy_dtyp:5,nux:5,nux_error_t:5,nuxerr:5,nuxpi:5,object:5,one:5,onnx_ml_pb2:4,openapi:[0,1,6],oper:4,optimize_model:4,option:[4,5],other:5,otherwis:4,output:[4,5],output_desc:5,output_num:5,pad:4,pair:5,param:1,paramet:1,pass:5,path:5,per:4,per_channel:4,phase:0,post:4,post_training_quant:4,post_training_quantization_with_random_calibr:4,predict:5,print:5,print_summari:5,provid:5,python:5,quantiz:3,quantizationmod:4,queue:5,rang:4,readi:5,receiv:5,recogn:5,recv:5,ref:5,releas:5,renegad:5,repres:6,request:5,resourc:5,result:5,right:4,run:5,runtim:3,safe:5,sdk:[1,2],second:[4,5],secret:1,secret_access_kei:1,self:5,sent:5,server:5,set:1,set_apikei:1,shape:5,singl:5,size:5,sourc:0,stop:5,str:[0,1,4,5],string:5,submit:5,submit_compil:0,success:5,summari:5,target_npu_spec:0,task:[0,5],task_id:0,tensor:4,tensordesc:5,thei:4,thi:5,thread:5,top:4,train:4,tupl:[4,5],type:5,union:5,unknown:5,unsupport:5,until:5,used:[2,5],user:5,util:[3,4,5],valu:[2,4,5],version:6,wait_for_complet:0,when:5,which:5,whose:5,width:[4,5],without:5,work:5,x_request_id:0,you:5},titles:["Client","Config","Consts","Python SDK Documentation","Quantizer","Runtime","Utils"],titleterms:{"const":2,apiclientinitfail:5,asyncsess:5,axi:5,client:0,compil:0,compilationfail:5,completionqueu:5,config:1,datatyp:5,document:3,error:5,incompatibleapiclienterror:5,incompatiblemodel:5,internalerror:5,invalidyamlexcept:5,model:5,nativeerror:5,noapikeyexcept:5,nuxexcept:5,onnx:4,python:3,quantiz:4,runtim:5,sdk:3,session:5,spec:4,tensor:5,tensorarrai:5,unsupportedtensortyp:5,util:6}})