    
   function find(obj, item) {
       for (var key in obj) {
           if (obj[key] && typeof obj[key] === 'object') {
               var result = find(obj[key], item);
               if (result) {
                   result.unshift(key);
                   return result;
               }
           } else if (obj[key] === item) {
               return [key];
           }
       }
   }
    
   function findFormatted(obj, item) {
       var path = find(obj, item);
       if (path == null) {
           return '';
       }
       return path.join('.');
   }
    
   function search(){
        let searchValue = document.getElementById('searchTerm').value;
        if(searchValue == ""){
            alert("Search can not be empty");
            return false;
        }

        let path = findFormatted(a, searchValue);
        let o = findFormatted(a, "One expensive house like that");
        console.log("path", path);
        console.log("path", o);
    }

