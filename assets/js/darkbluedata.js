/**
  DARKBLUEDATA
  Row Name             |Readmore      |Video      |Download      |Section      |Logins      |
  action varchar(40)   |click_readmore|click_video|click_download|seen_section |login       |
  title varchar(255)   |                      Element ID                       |User Login  |
  details varchar(255) |                      data-description                 |User Login  |
  timespent int(8)     |0              |timespent on playing video|0           |0           |

 Generally good metrics
 - Total Logins
 - Total Clicks of specific link
 - Highest Percentage of site seen
**/
function darkBlueDataTracker(action,element,timespent) {
  actioned = jQuery(element);
  var data = {
    'action':'darbluedata_track',
    'class':action,
    'title':actioned.attr('id'),
    'details':actioned.data('details'),
    'timespent':timespent,
  }
  jQuery.post(dDD, data)
  .success(function(response) {
    console.log('success = ' + response)
  })
  .fail(function(response) {
    console.log('failure = ' + response)
  })
}