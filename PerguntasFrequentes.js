import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function PerguntasFrequentes(props) {
    const [indiceDuvida, setIndiceDuvida] = useState(false)
    const [respostasDuvidas, setRespostasDuvidas] = useState([
        'É uma forma admitida pela lei de uma pessoa assumir como filho uma criança ou adolescente nascida de outra. A adoção só pode se dar por meio dos Juizados da Infância e da Juventude. Garante ao filho adotivo os mesmos direitos dos filhos biológicos, inclusive de herança. A adoção é irrevogável, ou seja, concedida pelo Juiz, não pode ser tornada sem efeito.'
        ,
        'Não, pois muitas têm vínculos jurídicos com a sua família de origem e, por isso, não estão disponíveis à adoção. Nesses casos, deve-se priorizar o retorno dessas crianças/adolescentes para o convívio com sua família. Cabe lembrar que, segundo o ECA, a adoção só pode acontecer se a família de origem for destituída do poder familiar, se os pais biológicos forem falecidos ou se forem desconhecidos (situação em que a criança não tem um registro com o nome dos pais).'
        ,
        'Toda pessoa com mais de 18 anos de idade, seja ela casada, solteira ou em união estável, pode adotar uma criança ou um adolescente. O adotante deve ser pelo menos 16 anos mais velho que a criança ou o adolescente que pretende adotar.'
        ,
        'Não. Essa conduta é ilegal, constitui crime, previsto no Código Penal e, descoberta, provocará o cancelamento do registro. O que se deve proceder é a adoção, por meio dos Juizados, com o que não haverá risco de perder a criança / adolescente nem mesmo para os pais biológicos.'
        ,
        'Não. Estudos e pesquisas mostram que os problemas de famílias adotivas e biológicas são os mesmos. O certo é que a paternidade / maternidade exige uma preparação, uma doação verdadeira, e toda a criança / adolescente que é criada em ambiente saudável, com afeto, aceitação, segurança, educação, respeito e compreensão, tem condições de tornar-se um adulto equilibrado e feliz, seja ele biológico ou adotivo.'
        ,
        'Sim e quem deve lhes revelar essa condição são os próprios pais, de forma natural e verdadeira, o mais cedo possível. É um direito seu conhecer a história de sua vida, a revelação irá gerar confiança nos pais adotivos e trará mais segurança em relação à adoção.'
        ,
        'Sim, podem adotar, quando não existam famílias brasileiras que queiram adotá-los, pois há uma preferência legal para os nacionais. O procedimento para conseguí-lo é diferente, têm de trazer documentação do país onde estejam domiciliados, declaração das autoridades daquele país de que darão ao adotado a sua nacionalidade e requerer inicialmente a habilitação nas Comissões Estaduais Judiciárias de Adoção – CEJA’s ou CEJAI’s.'
        ,
        `
        •	Os pretendentes devem comparecer ao Cartório do Juizado da Infância e da Juventude com a documentação exigida.
        •	Os pretendentes serão encaminhados ao setor técnico para estudos sociais e psicológicos.
        •	Parecer do Ministério Público e decisão do Juiz da Comarca.
        •	Deferido a habilitação será expedida a Certidão de Habilitação à adoção.
        •	Os habilitados serão registrados em cadastro e aguardarão a indicação de criança e ou adolescente.`
        ,
        `•	Cópia de Identidade de cada requerente;
        •	Cópia de CPF de cada requerente;
        •	Cópia de Certidão de Casamento (ou Declaração de União Estável) ou Certidão de Nascimento (se solteiros);
        •	Cópia de comprovante de residência;
        •	Declaração de renda mensal (contra-cheque ou declaração de IR. No caso de trabalhador autônomo, o Setor de Cadastro disponibiliza um modelo para comprovação de renda);
        •	Atestado de sanidade física e mental (pode ser emitida por médico de qualquer especialidade;
        •	Atestado(s) de idoneidade moral de cada pretendente, assinado(s) por pessoas diferentes, sem parentesco, com firma reconhecida ou com cópia do documento do atestante;
        •	Certidões de antecedentes criminais de cada um dos requerentes.
        •	Certidões negativas de distribuição cível de cada um dos requerentes;
        •	Caso já tenha filho, trazer a cópia da Certidão de Nascimento;
        •	Número do protocolo gerado após o pré-cadastro no SNA.`
    ])
    const [cabecalhoResposta, setCabecalhoResposta] = useState([
        `O que é adoção?`
        ,
        `Todas as crianças e adolescentes que se encontram nos abrigos podem ser adotadas?`
        ,
        `Quem pode adotar?`
        ,
        `É possível registrar como filho uma criança nascida de outra pessoa?`
        ,
        `Filhos adotivos dão mais problemas que filhos biológicos?`
        ,
        `A criança / adolescente deve saber que é adotada?`
        ,
        `Os estrangeiros, residentes em outros países, podem adotar crianças/adolescentes brasileiros?`
        ,
        `Quais os procedimentos necessários para adoção?`
        ,
        `Quais os documentos necessários para habilitação de adoção?`
    ])
    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold' }}>Perguntas Frequentes</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 70, paddingLeft: 20, paddingRight: 80, justifyContent: 'center' }}>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>1</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> O que é adoção?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> É uma forma admitida pela lei de uma pessoa assumir como filho uma criança ou adolescente nascida de outra ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(0)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Todas as crianças e adolescentes que se encontram nos abrigos podem ser adotadas?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Não, pois muitas têm vínculos jurídicos com a sua família de origem e, por isso, não estão disponíveis à adoção ...
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(1)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>2</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>3</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Quem pode adotar?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>Toda pessoa com mais de 18 anos de idade, seja ela ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(2)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> É possível registrar como filho uma criança nascida de outra pessoa?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> Não. Essa conduta é ilegal, constitui crime, previsto no Código Penal ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(3)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>4</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>5</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Filhos adotivos dão mais problemas que filhos biológicos?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Não. Estudos e pesquisas mostram que os problemas de famílias adotivas e biológicas são os mesmos ...
                                </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(4)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                A criança / adolescente deve saber que é adotada?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> Sim e quem deve lhes revelar essa condição são os próprios pais, de forma natural e verdadeira, o mais cedo possível ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(5)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>6</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>7</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Os estrangeiros, residentes em outros países, podem adotar crianças/adolescentes brasileiros?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Sim, podem adotar, quando não existam famílias brasileiras que queiram adotá-los, pois há uma preferência legal para os nacionais ...
                                </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(6)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Quais os procedimentos necessários para adoção?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Os pretendentes devem comparecer ao Cartório do Juizado da Infância e da Juventude com a documentação exigida.
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Os pretendentes serão encaminhados ao setor técnico para estudos sociais e psicológicos.
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(247,139,13)', paddingTop: 15 }}>
                                Veja informação completa em Saiba mais
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(7)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>8</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>9</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Quais são os documentos necessários para habilitação de Adoção?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de Identidade de cada requerente;
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de CPF de cada requerente
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de Certidão de Casamento (ou Declaração de União Estável) ou Certidão de Nascimento (se solteiros);
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(247,139,13)', paddingTop: 15 }}>
                                Veja informação completa em Saiba mais
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setIndiceDuvida(8)} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 150 }}></View>
                </View>
            </ScrollView>
            {
                indiceDuvida == false && typeof indiceDuvida != 'number' ?
                    <View></View>
                    :
                    <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(125,125,125,0.5)' }}>
                        <ScrollView>
                            <View style={{ marginTop: 30, flexDirection: 'row', paddingLeft: 20, paddingRight: 80, left: 45, top: '20%' }}>
                                <View style={styles.modalDisplay4}>
                                    <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(247,139,13)', textAlign: 'center' }}>{cabecalhoResposta[indiceDuvida]}</Text>
                                    <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(17,69,91)', paddingTop: 15 }}>{respostasDuvidas[indiceDuvida]}</Text>
                                    <TouchableOpacity style={styles.btnmodalDisplay} onPress={()=>setIndiceDuvida(false)} >
                                        <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{paddingBottom:300}}></View>
                        </ScrollView>
                    </View>
            }



            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                    <Image style={styles.iconStyle} source={require('./assets/newIcons/dicasOff.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha} onPress={() => props.setTela('Trilha')}>
                    <Image style={styles.iconStyleTrilha} source={require('./assets/newIcons/trilhaOff.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('PerguntasFrequentes')}>
                    <Image style={styles.iconStyle} source={require('./assets/newIcons/duvidasOn.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        borderBottomWidth: 3,
        borderColor: 'rgb(247,139,13)'
    },
    inputTextStyle: {
        width: '0%',
        height: 50,
        borderWidth: 1
    },
    btnInfo: {
        position: 'absolute',
        left: 20
    },
    btnPerfil: {
        position: 'absolute',
        right: 20
    },
    bottomNav: {
        width: '100%',
        height: 70,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 99
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#f78b0d',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        borderWidth: 4,
        borderColor: '#f7f7f7',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    btnBalaoTrilhaL: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        right: 90
    },
    btnBalaoTrilhaR: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        left: 90
    },
    iconStyle: {
        width: 42,
        height: 42
    },
    iconStyleTrilha: {
        width: 70,
        height: 70
    },
    iconTemplate: {
        width: 100,
        height: 150,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    modalDisplay3: {
        marginTop: 20,
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15,
        padding: 15
    },
    modalDisplay4: {
        marginTop: 20,
        backgroundColor: '#f7f7f7',
        borderRadius: 15,
        padding: 15
    },
    btnmodalDisplay: {
        padding: 15,
        height: 30,
        backgroundColor: 'rgb(247,139,13)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }

});