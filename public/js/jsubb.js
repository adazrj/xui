function pattern(str){
	//str = str.replace(/(\r\n|\n|\r)/ig, '');
	str = str.replace(/<br[^>]*>/ig,'\n');
	str = str.replace(/<p[^>\/]*\/>/ig,'\n');
	//str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpcode($2);});	
	str = str.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/ig,'');

	str = str.replace(/<hr[^>]*>/ig,'[hr]');
	str = str.replace(/<(sub|sup|u|strike|b|i|pre)>/ig,'[$1]');
	str = str.replace(/<\/(sub|sup|u|strike|b|i|pre)>/ig,'[/$1]');
	str = str.replace(/<(\/)?strong>/ig,'[$1b]');
	str = str.replace(/<(\/)?em>/ig,'[$1i]');
	str = str.replace(/<(\/)?blockquote([^>]*)>/ig,'[$1blockquote]');

	str = str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');
	str = str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');
	str = str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url=$1]'+'$2'+'[/url]');
	//str = str.replace(/<h([1-6]+)([^>]*)>(.*?)<\/h\1>/ig,function($1,$2,$3,$4){return h($3,$4,$2);});

	str = str.replace(/<[^>]*?>/ig, '');
	str = str.replace(/&amp;/ig, '&');
	str = str.replace(/&lt;/ig, '<');
	str = str.replace(/&gt;/ig, '>');

	return str;
}
