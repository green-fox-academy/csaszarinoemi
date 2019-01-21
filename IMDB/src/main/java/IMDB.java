import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;

public class IMDB {
  public static void main(String[] args) {
    System.setProperty("webdriver.gecko.driver", "C:\\Users\\Nono\\Documents\\Green Fox Academy\\greenfox\\geckodrivers\\Mozilla\\geckodriver.exe");
    WebDriver mydriver = new FirefoxDriver();
    mydriver.manage().deleteAllCookies();
    mydriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    mydriver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
    mydriver.get("https://www.imdb.com/");

    Login.login(mydriver);
    WebDriverWait wait = new WebDriverWait(mydriver, 30);

    Search.search(mydriver, "Citizen Kane");
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[3]/div[1]/div/div[2]/table/tbody/tr[1]/td[2]/a").click();
    AddToWatchList.addToWatchList(mydriver);


    Search.search(mydriver,"Spider-Man: Into");
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[3]/div[1]/div/div[2]/table/tbody/tr[1]/td[2]/a").click();
    AddToWatchList.addToWatchList(mydriver);


    Search.search(mydriver, "Bohém rapszódia");
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[3]/div[1]/div/div[2]/table/tbody/tr/td[2]/a").click();
    AddToWatchList.addToWatchList(mydriver);

    WathListOrder.watchListOrder(mydriver, "3");
    WathListOrder.watchListOrder(mydriver, "2");

    EditWatchList.editWatchList(mydriver);
    //logout

    Actions actions = new Actions(mydriver);

    actions.moveToElement(((FirefoxDriver) mydriver).findElementByXPath("//*[@id=\"navUserMenu\"]")).perform();

    //((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[1]/div[2]/div[3]/ul/li/span").click();
    WebElement logout = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"nblogout\"]")));
    logout.click();




  }
}
