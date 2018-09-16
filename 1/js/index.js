$(function () {
    console.log($(document.body));
    //
    let weather;
    // 请求数据
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",//路径
        dataType:"jsonp",//返回的数据类型
        success:function (res) {
            weather=res.data.weather;
            console.log(res);
            render(weather);
        }
    });

    // 渲染数据
    function render(obj) {
        $(".address_box .city").html(obj.city_name);
        $(".mass p").eq(0).html(obj.current_temperature+"°");
        $(".mass p").eq(1).html(obj.current_condition);


        // 小时  dom   数组
        obj.hourly_forecast.forEach(function (item,index) {
            let str="";
            str =`<li>
                <div class="time"><img src="img/${item.weather_icon_id}.png" alt=""></div>
                <div class="small_pic">${itme.dlaskjdlkjas}</div>
                <div class="temp">-1°</div>
            </li>`;
            // console.log($(".weather_j"));
            $(".weather_j").append(str);

        })



    }





})