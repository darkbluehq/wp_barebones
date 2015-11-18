jQuery(document).ready(function() {
  //function darkBlueDataTracker(element,action,timespent) {
  //Readmore Clicks
  jQuery('.darkbluedata--readmore').on('click',function(event) {
    //event.preventDefault()
    darkBlueDataTracker('click',this,false) 

  });
  //Download Clicks
  jQuery('.darkbluedata--download').on('click',function(event) {
    //event.preventDefault()
    darkBlueDataTracker('download',this,false) 
  });

  //Video Clicks
  jQuery('.darkbluedata--video').on('click',function(event) {
    //event.preventDefault()
    darkBlueDataTracker('video',this,10) 
  });

});

//TODO: Tracking furthest scrolled...




