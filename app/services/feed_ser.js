app.service('feed_ser', ['$rootScope', function($rootScope){
    var now, now_seconds;

    function get_random_int (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function generate_date(){
        return now.setSeconds(now_seconds - Math.floor(Math.random() * (60*30 + 1)));
    }
    function get_feed(){
        now = new Date();
        now_seconds = now.getSeconds();
        return [
            {user_name:'Steven Gerard', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time:generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Sergio Ramos', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Raul Gonzales Blanco', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Alvaro Arbeloa', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(2, 6), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Gonzalo Higuain', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Shay Aharon', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 800), item_comments:get_random_int(60, 98), item_shares:get_random_int(40, 1500), item_relevancy: Math.random() },
            {user_name:'Oz Tzabag', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Ben Uzan', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
            {user_name:'Amir Gola', user_img:'assets/images/profile_pic.png', item_title: 'What are the best songs of Michael Jackson?', item_time: generate_date(), item_img: 'assets/images/feed_pic.png', item_votes: get_random_int(100, 250), item_comments:get_random_int(10, 50), item_shares:get_random_int(4, 15), item_relevancy: Math.random() },
        ];
    }
    var service = {
        data: get_feed()
//    שם משתמש - user_name
//    תמונת משתמש - user_img
//    כותרת  - item_title
//    זמן פרסום - item_time
//    תמונה  - item_img
//    מספר הצבעות - item_votes
//    מספר הערות - item_comments
//    מספר שיתופים - item_shares
    };
    return service;
}]);
