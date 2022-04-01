<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;
use Nette\Application\UI\Form;


final class HomepagePresenter extends Nette\Application\UI\Presenter
{
    private Nette\Database\Explorer $database;

    private $slides;
    private $pages;
    private $references;
    private $navItems;

    public function __construct(Nette\Database\Explorer $database)
    {
        $this->database = $database;
    }

    public function actionDefault(): void 
    {
        $this->slides = $this->database->table('slides');
        $this->pages = $this->database->table('pages')->order('id DESC');
        $this->references = $this->database->table('references');
        $this->navItems = $this->database->table('pages')->where('inNav', 1);
    }

    public function renderDefault(): void
    {
        $this->template->slides = $this->slides;
        $this->template->pages = $this->pages;
        $this->template->references = $this->references;
        $this->template->navItems = $this->navItems;
    }

    protected function createComponentCtaForm(): Form
    {
        $ctaForm = new Form();
        $ctaForm->addText('name', 'Jméno')
        ->setHtmlAttribute('placeholder', 'Jméno*')
        ->setRequired();
        
        $ctaForm->addEmail('email', 'Email')
        ->setHtmlAttribute('placeholder', 'Email*')
        ->setRequired();
        
        $ctaForm->addText('phone', 'Telefon')
        ->setHtmlType('tel')
        ->setHtmlAttribute('placeholder', 'Telefon*')
        ->setRequired();
        
        $ctaForm->addTextArea('message', 'Zpráva')
        ->setHtmlAttribute('placeholder', 'Vaše zpráva...');
        
        $ctaForm->addSubmit('send',  'Poslat')
        ->setHtmlAttribute('class', 'btn btn-primary');
        
        $ctaForm->onSuccess[] = [$this, 'ctaProcess'];
        return $ctaForm;
    }

    public function ctaProcess($form, array $values): void
    {
        try{
            $this->database->table('call_to_action')->insert($values);

        } catch (AnyModelException $e){
            $form->addError('Error');
        }
    }
}