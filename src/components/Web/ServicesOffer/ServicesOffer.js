import React from "react";
import "./ServicesOffer.scss";
import { Row, Col, Collapse } from "antd";

const { Panel } = Collapse;

export default function ServicesOffer() {
  return (
    <Row className="services-offer">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="services-offer__title">
          <h2>
            Sea parte de nuestros clientes - haga crecer su producto y/o su
            marca y consolide su empresa.
          </h2>

          <Row className="services-offer__list">
            <Col xs={24}>
              <p>
                El profesional a cargo siempre entregará su aplicacion,
                portafolio, tienda virtual o su sitio web lo mas optimizado
                posible para los buscadores de Google. Introducimos opciones de
                posicionamiento, redes sociales y publicidad. Nuestras
                soluciones de diseño y desarrollo web se ajustan a todas las
                necesidades y a todos los bolsillos:
              </p>
              <ul>
                <li>
                  Web de todo tipo basadas en WordPress, Drupal, Joomla,
                  HTML+PHP, o HTML+JAVASCRIPT
                </li>
                <li>Tiendas Online basadas en Prestashop o Magento..</li>
                <li>
                  Diseño web a pedido como Portales corporativos, portafolios,
                  páginas personales, tiendas online.
                </li>
                <li>
                  Diseño totalmente personalizado y de acuerdo a sus
                  requerimientos.
                </li>
              </ul>
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Creamos Su Portafolio  ✔️ " key="1" id="portfolio">
              <Row>
                <Col lg={24} className="services-offer__subtitle">
                  <Row className="services-offer__list">
                    <Col xs={11}>
                      <h3>¿Para Que?</h3>
                      <ul>
                        <li>
                          Dar a conocer el trabajo realizado por una persona o
                          empresa.
                        </li>
                        <li>Elevar la rentabilidad en un área específica.</li>
                        <li>Buscar clientes potenciales.</li>
                        <li>
                          Establecer relaciones comerciales e institucionales.
                        </li>
                        <li>
                          Mostrar sus conocimientos, habilidades que tienen y/o
                          los productos que ofrece su empresa.
                        </li>
                      </ul>
                    </Col>
                    <Col xs={2}></Col>

                    <Col xs={11}>
                      <h3>¡Beneficios!</h3>
                      <ul>
                        <li>Mostrar tu trabajo en la medida en que creces.</li>
                        <li>
                          Es muy práctico organizar tu expediente personal.
                        </li>
                        <li>
                          Destaca tu talento para conseguir clientes o para que
                          te descubra una empresa y puedas desarrollar aún más
                          tu potencial.
                        </li>
                        <li>
                          Te permite crear una marca personal o comercial
                          sólida.
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Panel>
            <Panel
              header="Apps - Aplications - Desarrollamos Su Aplicación  ✔️ "
              key="2"
            >
              <Row>
                <Col lg={24} className="services-offer__subtitle">
                  <Row className="services-offer__list">
                    <Col xs={24}>
                      <p>
                        Fortalecimiento o lanzamiento de una nueva marca, venta
                        de productos online, y hasta ofrecimiento de servicios
                        personales son beneficios de contar con una app propia
                        para empresas o personas naturales e independientes.
                        Tener presencia en los dispositivos móviles es
                        prioritario para su posicionamiento, dado que los
                        clientes y usuarios pueden consultar la aplicación en
                        cualquier parte especialmente en tiempo libre o en
                        desplazamientos largos. La posibilidad de sincronización
                        de la aplicación con las redes sociales mejora la
                        difusión y viralización de contenidos. Los propios
                        clientes se encargarán mediante las redes de darte a
                        conocer a sus amigos y ampliar así el abanico de
                        clientes potenciales.
                      </p>
                      <p>
                        tener una app móvil puede ayudarle a alcanzar a su
                        público fácilmente. Realmente, usted tiene una gran
                        oportunidad de hacer que su negocio crezca
                        exponencialmente proporcionando a sus clientes las
                        caracteristicas más utiles para ellosa través de su
                        aplicación.
                      </p>
                      <h3>
                        He aquí las ventajas que puede lograr al construir su
                        propia aplicación web:
                      </h3>
                      <Col xs={11}>
                        <h3>Para su negocio</h3>
                        <ul>
                          <li>
                            Ofertas visibles y accesibles en todo momento.
                          </li>
                          <li>Crear un canal de marketing directo.</li>
                          <li>
                            Crear una marca y generar reconocimiento ante su
                            público objetivo.
                          </li>
                          <li>Compromiso y lealtad con sus clientes..</li>
                          <li>Diferenciarse de la competencia..</li>
                        </ul>
                      </Col>
                      <Col xs={2}></Col>

                      <Col xs={11}>
                        <h3>Para sus clientes</h3>
                        <ul>
                          <li>Pueden acceder a su inventario fácilmente.</li>
                          <li>
                            Pueden recibir notificaciones acerca de ofertas,
                            eventos, lanzamientos especiales, etc.
                          </li>
                          <li>
                            Pueden minimizar su tiempo de compra al tener acceso
                            a su información de contacto mediante un solo clic.
                          </li>
                          <li>Formalizar citas fácilmente.</li>
                        </ul>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Panel>
            <Panel
              header="Diseñamos y Desarrollamos su Página Web Dinámica y Personalizada ✔️ "
              key="3"
            >
              <p>
                Las páginas web dinámicas permiten cambiar fácilmente su
                contenido en tiempo real sin siquiera tocar su código interno.
                Esto hace posible mantener el contenido de la página actualizado
                para quien lo visita. Por ello, el diseño central de la página
                web puede seguir siendo el mismo, pero los datos presentan
                cambios constantes.
              </p>
              <Row>
                <Col lg={24} className="services-offer__subtitle">
                  <Row className="services-offer__list">
                    <Col xs={11}>
                      <h3>Caracteristicas</h3>
                      <ul>
                        <li>
                          Suele estar almacenada en bases de datos, su contenido
                          se extrae a medida que el visitante realice acciones
                          en el sitio web.
                        </li>
                        <li>
                          Una vez construidas y terminadas, el dueño de la
                          aplicación pueda agregar, modificar, eliminar
                          información sin necesidad de tocar el código.
                        </li>
                      </ul>
                    </Col>
                    <Col xs={2}></Col>

                    <Col xs={11}>
                      <h3>¡Beneficios!</h3>
                      <ul>
                        <li>Mayor interacción con el usuario.</li>
                        <li>Proceso de actualización rápido y sencillo..</li>
                        <li>Múltiples posibilidades.</li>
                        <li>Mejor posicionamiento.</li>
                        <li>Gran número de funciones adicionales</li>
                        <li>Menos costes de mantenimiento.</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Panel>
            <Panel
              header="Creación, Gestion, Sistemas - Base de Datos  ✔️ "
              key="4"
            >
              <Row>
                <Col lg={24} className="services-offer__subtitle">
                  <Row className="services-offer__list">
                    <Col xs={24}>
                      <p>
                        El manejo y la consulta de una base de datos es una
                        herramienta esencial para el desarrollo y el progreso de
                        cualquier empresa o compañía en época actual. La gestión
                        de bases de datos es una serie de buenas prácticas
                        ofreciendo a los usuarios finales acceso a sus bases de
                        datos y permitiéndoles organizar y acceder a los datos
                        según sea necesario.
                      </p>
                      <p>
                        Un sistema de gestión de bases de datos DBMS se refiere
                        a un sistema definido por software que gestiona bases de
                        datos. Dicho sistema permite a sus usuarios leer,
                        actualizar, crear y eliminar según sus necesidades,
                        pudiéndose almacenar gran número de información de una
                        forma organizada y segura. Para posteriormente ayudarnos
                        a evaluar pérdidas o ganancias financieras, cuantificar
                        la cantidad de mercancía disponible en un almacén,
                        cualificar una óptima relación de clientes, por esto y
                        mucho más, usted debe contar con destrezas en el manejo,
                        gestión y sistemas de base de datos o personal
                        calificado en este aspecto.
                      </p>
                      <h3>¿por qué es necesaria?</h3>
                      <Col xs={24}>
                        <ul>
                          <li>
                            Mantener las operaciones empresariales en
                            funcionamiento según lo previsto.
                          </li>
                          <li>
                            Mantener un seguimiento de los clientes, el
                            inventario de datos y los empleados.
                          </li>
                          <li>Mantener el rendimiento de las aplicaciones.</li>
                          <li>
                            Automatizar procesos y procedimientos de bases de
                            datos.
                          </li>
                        </ul>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}
