package jp.shibu.fortune.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Random;
import jp.shibu.fortune.Result;


@RestController
@RequestMapping("api")
public class FortuneController {
    private static String[] results = {
        "大吉",
        "吉",
        "中吉",
        "小吉",
        "末吉",
        "凶",
        "大凶",
    };

    @RequestMapping("fortune")
    public Result fortune() {
        var random = new Random();
        var index = random.nextInt(FortuneController.results.length);
        var result = FortuneController.results[index];
        return new Result(result);
    }
}