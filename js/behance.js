$(document).ready(function() {

    $.ajax({
        url: 'https://api.behance.net/v2/users/mmichnowicz/projects?client_id=EU5buttvgUHR481Lf2krCVB8EV8TPanY',
        dataType: 'jsonp',
        method: 'GET',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        }
        
    }).done(function(x) {
                
        var project = x.projects;
        
        function showProject(id) {
            var projectName = project[id].name;
            var projectDesc = project[id].fields.join().split(",").join(", ");
            var projectImage = project[id].covers["404"];
            
            console.log(projectImage);
            
            var projectLink = project[id].url;
            
            $('.behance-item[data-id="'+id+'"] .item-data-name').html(projectName);
            $('.behance-item[data-id="'+id+'"] .item-data-range').html(projectDesc);
            $('.behance-item[data-id="'+id+'"] .item-image').attr('src',projectImage);
            $('.behance-item[data-id="'+id+'"] .behance-item-link').attr('href',projectLink);
        }
        
        showProject(6); 
        showProject(7); 
        showProject(8); 
        showProject(2); 
        showProject(9); 
        showProject(10); 
        showProject(15); 
        showProject(17); 
        
        //console.log(project);
        
    }).fail(function() {
        $('.behance-error').show();
        $('.behance-item').hide();
        console.log("Wystąpił błąd połączenia z API Behance. Sprawdź mój profil bezpośrednio na be.net")
    });
    
});
