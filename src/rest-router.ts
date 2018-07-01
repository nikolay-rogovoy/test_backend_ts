import {Router} from 'express-serve-static-core';
import {TestController} from "./controllers/test-controller";
import {GetCustomerController} from "./controllers/get-customer-controller";
import {GetCustomersController} from "./controllers/get-customers-controller";
import {PostCustomerController} from "./controllers/post-customer-controller";
import {DeleteCustomerController} from "./controllers/delete-customer-controller";
import {Test2Controller} from "./controllers/test2-controller";

/**Класс обработки маршрутов*/
export class RestRouter {

    /*
     * Используемые коды ответа HTTP
     *
     * 200 OK — успешный запрос. Если клиентом были запрошены какие-либо данные, то они находятся в заголовке и/или теле сообщения.
     * 201 Created — в результате успешного выполнения запроса был создан новый ресурс.
     *               Сервер может указать адреса (их может быть несколько) созданного ресурса в теле ответа, при этом предпочтительный
     *               адрес указывается в заголовке Location. Серверу рекомендуется указывать в теле ответа характеристики созданного
     *               ресурса и его адреса, формат тела ответа определяется заголовком Content-Type.
     *
     * 400 Bad Request — сервер обнаружил в запросе клиента синтаксическую ошибку.
     * 401 Unauthorized — для доступа к запрашиваемому ресурсу требуется аутентификация.
     *               В заголовке ответ должен содержать поле WWW-Authenticate с перечнем условий аутентификации. Клиент может повторить
     *               запрос, включив в заголовок сообщения поле Authorization с требуемыми для аутентификации данными.
     * 404 Not Found — основная причина — ошибка в написании адреса Web-страницы. Сервер понял запрос, но не нашёл соответствующего
     *               ресурса по указанному URI. Если серверу известно, что по этому адресу был документ, то ему желательно использовать
     *               код 410.
     * 424 Failed Dependency - реализация текущего запроса может зависеть от успешности выполнения другой операции.
     *               Если она не выполнена и из-за этого нельзя выполнить текущий запрос, то сервер вернёт этот код.
     *
     * 500 Internal Server Error — любая внутренняя ошибка сервера, которая не входит в рамки остальных ошибок класса.
     *
     *
     * */

    handleRoutes(router: Router): void {
        let cnt = null;

        // test
        cnt = new TestController();
        router.get('/test', cnt.handler.bind(cnt));
        cnt = new Test2Controller();
        router.get('/test2', cnt.handler.bind(cnt));

        // customers
        cnt = new GetCustomersController();
        router.get('/customer', cnt.handler.bind(cnt));
        cnt = new GetCustomerController();
        router.get('/customer/:idcustomer', cnt.handler.bind(cnt));
        cnt = new DeleteCustomerController();
        router.delete('/customer/:idcustomer', cnt.handler.bind(cnt));
        cnt = new PostCustomerController();
        router.post('/customer', cnt.handler.bind(cnt));

    }
}

