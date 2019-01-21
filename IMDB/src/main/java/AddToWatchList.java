import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AddToWatchList {
  public static void addToWatchList(WebDriver mydriver){
    WebElement watchListButton = ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[5]/div[1]/div/div/div[1]/div[2]/div/div[2]/div[1]/div[1]/div");
    if(watchListButton.getAttribute("title").contains("add")){
      watchListButton.click();
    }
  }
}
